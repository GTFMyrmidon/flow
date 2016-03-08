#The Company
#02-09-16
#Add classes bash script
#Created by Joel Marquez

FILE=$1

#save .sql file
type="CSDB"
#name for table
type2="core"

count=$(wc -l < $FILE) 
id=1

printf "create table if not exists \`$type2\` (
	\`id\` int(1) not null auto_increment,
	\`name\` varchar(100) not null,
	\`catalogName\` varchar(9) not null,
	primary key (\`id\`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=8;\n\n" >> $type.sql
printf "insert into \`$type2\` (\`id\`, \`name\`, \`catalogName\`) values\n" >> $type.sql
while read l1 l2 l3
	do	
		if (("$id" <= "$count"))
		then	 
		printf "($id,'$l3','$l1 $l2'),\n" >> $type.sql
		fi
		let "id+=1"
done < $FILE 
printf "\n" >> $type.sql

