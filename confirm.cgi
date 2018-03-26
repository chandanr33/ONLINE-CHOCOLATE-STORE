use DBI;
use CGI;

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn048";
my $username = "jadrn048";
my $password = "outlet";
my $database_source = "dbi:mysql:$database:$host:$port";


my $dbh = DBI->connect($database_source, $username, $password) or die 'Cannot connect to db';

print <<EOC;
Content-type:  text/html
<!DOCTYPE html>
<html>
<head>
        <title>A Database Insertion Example with Perl</title>
        <meta http-equiv="content-type" 
                content="text/html;charset=utf-8" />
        <meta http-equiv="Content-Style-Type" content="text/css" />
        <style type="text/css">
            h1 { text-align: center; }
            table { width: 40%; margin: 0 auto 0 auto; border-collapse: collapse; }
            td { border: 1px solid blue; background-color: #DDD; }
        </style>
</head>
<body>
EOC

  my $query = new CGI;  

  my $date = $query->param('fname');
  my $SKU = $query->param('lname');
  my $quantity = $query->param('address1');



my $statement = "INSERT INTO product VALUES(0, '$date', '$SKU', '$quantity');";

print "The SQL statement is:\n";
print "$statement\n";


my $count = $dbh->do($statement);


print "<h1>Result of Insertion</h1>\n";
if($count == 1) {
    print "SUCCESS, the number of rows affected is $count\n";
    }
else {
    print "ERROR: ".$dbh->errstr()."<br />\n";
    print "ERROR: ".$dbh->state()."\n";
    }

print "</body></html>";
$dbh->disconnect() or die $DBI::errstr;;    