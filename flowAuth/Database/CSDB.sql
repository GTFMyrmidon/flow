create table if not exists `foundation` (
	`id` int(1) not null auto_increment,
	`name` varchar(100) not null,
	`catalogName` varchar(9) not null,
	primary key (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=8;

insert into `foundation` (`id`, `name`, `catalogName`) values
(1,'Computer Science as a Field of Work and Study','CSCI 1000­'),
(2,'Computer Science 1: Starting Computing','CSCI 1300'),
(3,'Computer Science 2: Data Structures','CSCI 2270­'),
(4,'Computer Systems','CSCI 2400­'),
(5,'Algorithms','CSCI 3104­'),
(6,'Principles of Programming Languages','CSCI 3155'),
(7,'Software Development Methods and Tools','CSCI 3308­');

create table if not exists `core` (
	`id` int(1) not null auto_increment,
	`name` varchar(100) not null,
	`catalogName` varchar(9) not null,
	primary key (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=8;

insert into `core` (`id`, `name`, `catalogName`) values
(1,'Human-Centered Computing Foundations/User-Centered Design & Development','CSCI 3002'),
(2,'Human-Centered Computing Professional Development','CSCI 3112'),
(3,'Introduction to Artificial Intelligence','CSCI 3202'),
(4,'Database and Information Systems','CSCI 3287'),
(5,'Introduction to Robotics','CSCI 3302'),
(6,'Theory of Computation','CSCI 3434'),
(7,'Numerical Computation','CSCI 3656'),
(8,'Cognitive Science','CSCI 3702'),
(9,'Operating Systems','CSCI 3753'),
(10,'Computer Graphics','CSCI 4229'),
(11,'Advanced Computer Graphics','CSCI 4239'),
(12,'Network Systems','CSCI 4273'),
(13,'Advanced Robotics','CSCI 4302'),
(14,'Chaotic Dynamics','CSCI 4446'),
(15,'Object-Oriented Analysis and Design','CSCI 4448'),
(16,'Data Mining','CSCI 4502'),
(17,'Compiler Construction','CSCI 4555'),
(18,'High-Performance Scientific Computing 1','CSCI 4576'),
(19,'High-Performance Scientific Computing 2','CSCI 4586'),
(20,'Computer Organization','CSCI 4593'),
(21,'Computer Performance Modeling','CSCI 4753'),
(22,'Computer Animation','CSCI 4809'),
(23,'Digital Logic','ECEN 2350'),
(24,'Embedded System Design','ECEN 4613'),
(25,'Spec Tpcs: UNIX System Administration','TLEN 5833');

create table if not exists `csElective` (
	`id` int(1) not null auto_increment,
	`name` varchar(100) not null,
	`catalogName` varchar(9) not null,
	primary key (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=8;

insert into `csElective` (`id`, `name`, `catalogName`) values
(1,'Human­Centered Computing Foundations/User­Centered Design & Development','CSCI 3002­'),
(2,'Human­Centered Computing Professional Development','CSCI 3112­'),
(3,'Introduction to Artificial Intelligence','CSCI 3202­'),
(4,'Database and Information Systems','CSCI 3287­'),
(5,'Introduction to Robotics','CSCI 3302­'),
(6,'Theory of Computation','CSCI 3434­'),
(7,'Numerical Computation','CSCI 3656­'),
(8,'Cognitive Science','CSCI 3702­'),
(9,'Operating Systems','CSCI 3753­'),
(10,'Computer Graphics','CSCI 4229­'),
(11,'Advanced Computer Graphics','CSCI 4239­'),
(12,'Network Systems','CSCI 4273'),
(13,'Advanced Robotics','CSCI 4302­'),
(14,'Chaotic Dynamics','CSCI 4446­'),
(15,'Object­Oriented Analysis and Design','CSCI 4448­'),
(16,'Data Mining','CSCI 4502­'),
(17,'Compiler Construction','CSCI 4555­'),
(18,'High­Performance Scientific Computing 1','CSCI 4576­'),
(19,'High­Performance Scientific Computing 2','CSCI 4586­'),
(20,'Computer Organization','CSCI 4593­'),
(21,'Computer Performance Modeling','CSCI 4753­'),
(22,'Computer Animation','CSCI 4809­'),
(23,'Digital Logic','ECEN 2350­'),
(24,'Embedded System Design','ECEN 4613­'),
(25,'Spec Tpcs: UNIX System Administration','TLEN 5833­'),
(26,'Special Topics in Computer Science','CSCI 4830­'),
(27,'Upper Division, Undergraduate level Independent Study','CSCI 4900­'),
(28,'Introduction to Operations Research','APPM 4120'),
(29,'Introduction to Operations Research','MATH 4120­');

create table if not exists `capstone` (
	`id` int(1) not null auto_increment,
	`name` varchar(100) not null,
	`catalogName` varchar(9) not null,
	primary key (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=8;

insert into `capstone` (`id`, `name`, `catalogName`) values
(1,'Software Engineering Project 1','CSCI 4308­,'),
(2,'Software Engineering Project 2','CSCI 4318­,'),
(3,'Senior Thesis','CSCI 4950,'),
(4,'Senior Thesis','CSCI 4950­,');

create table if not exists `math` (
	`id` int(1) not null auto_increment,
	`name` varchar(100) not null,
	`catalogName` varchar(9) not null,
	primary key (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=8;

insert into `math` (`id`, `name`, `catalogName`) values
(1,'Calculus 1 for Engineers or MATH 1300­5, Calculus 1.','APPM 1350­'),
(2,'Calculus 2 for Engineers or MATH 2300­5, Caclulus 2.','APPM 1360­'),
(3,'Linear Algebra with CS Applications','CSCI 2820­'),
(4,'Intro to Linear Algebra','MATH 3130­'),
(5,'Matrix Methods and Applications','APPM 3310­'),
(6,'Statistical Methods','APPM 4570­'),
(7,'Applied Probability','APPM 3570­'),
(8,'Introduction to Mathematical Statistics','APPM 4520­'),
(9,'Probability, Statistics and Decision.','CVEN 3227­'),
(10,'Introduction to Probability and Statistics','MATH 3510­'),
(11,'Introduction to Probability Theory','MATH 4510­'),
(12,'Introduction to Probability Theory','ECEN 3810­'),
(13,'Introduction to Statistics w/Computer Applications','ECON 3818­'),
(14,'Engineering Statistics','MCEN 4120­'),
(15,'Discrete Structures','CSCI 2824­'),
(16,'Discrete Mathematics for Computer Engineers','ECEN 2703'),
(17,'Discrete Applied Mathematics','APPM 3170­');

create table if not exists `naturalScience` (
	`id` int(1) not null auto_increment,
	`name` varchar(100) not null,
	`catalogName` varchar(9) not null,
	primary key (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=8;

insert into `naturalScience` (`id`, `name`, `catalogName`) values
(1,'General Physics 1','PHYS 1110'),
(2,'General Physics 2','PHYS 1120'),
(3,'Experimental Physics 1','PHYS 1140'),
(4,'General Chemistry for Engineers','CHEN 1211'),
(5,'Engineering General Chemistry lab','CHEM 1221'),
(6,'General Chemisty 1','CHEM 1113'),
(7,'Laboratory in General Chemistry 1','CHEM 1114'),
(8,'General Physics 1','PHYS 1110'),
(9,'Accelerated Introductory Astronomy 1','ASTR 1030'),
(10,'Accelerated Introductory Astronomy 2','ASTR 1040'),
(11,'Weather and the Atmosphere','ATOC 1050'),
(12,'Our Changing Environment: El Nino, Ozone, and Climate','ATOC 1060'),
(13,'General Chemistry 1—OR—CHEN 1211-4, General Chemistry for Engineers','CHEM 1113'),
(14,'Laboratory in General Chemistry 1—OR—CHEM 1221-1, Engineering General Chemistry Lab','CHEM 1114'),
(15,'General Chemistry 2','CHEM 1133'),
(16,'Laboratory in General Chemistry 2','CHEM 1134'),
(17,'Biology: A Human Approach 1','EBIO 1030'),
(18,'Biology: A Human Approach 2','EBIO 1040'),
(19,'General Biology 1','EBIO 1210'),
(20,'General Biology 2','EBIO 1220'),
(21,'General Biology Laboratory 1','EBIO 1230'),
(22,'General Biology Laboratory 2','EBIO 1240'),
(23,'Environmental Systems 1—Climate and Vegetation','GEOG 1001'),
(24,'Introduction to Geology','GEOL 1010'),
(25,'Introduction to Earth History','GEOL 1020'),
(26,'Introduction to Cellular and Molecular Biology','MCDB 1150'),
(27,'General Physics 1','PHYS 1110'),
(28,'General Physics 2','PHYS 1120'),
(29,'Experimental Physics 1','PHYS 1140'),
(30,'Biological Psychology','PSYC 2012');

create table if not exists `humanities` (
	`id` int(1) not null auto_increment,
	`name` varchar(100) not null,
	`catalogName` varchar(9) not null,
	primary key (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=8;

insert into `humanities` (`id`, `name`, `catalogName`) values
(1,'Writing on Science and Society.','WRTG 3030'),
(2,'Technical Communication and Design.','WRTG 3035'),
(3,'Introduction to the Humanities.','HUEN 1010'),
(4,'Humanities for Engineers 1.','HUEN 3100'),
(5,'Writing in Physics: Problem-Solving and Rhetoric.','PHYS 3050'),
(6,'Human Ecology: Archaeological Aspects','ANTH 4330'),
(7,'Human Ecology: Cultural Aspects','ANTH 4600'),
(8,'History and Theories of Architecture I','ARCH 3114'),
(9,'History and Theories of Architecture II','ARCH 3214'),
(10,'Architectural Appreciation and Design','ARCH 4010'),
(11,'Introduction to Human Spaceflight','ASEN 3036'),
(12,'Humans in Aviation','ASEN 3046'),
(13,'The Meaning of Information Technology','ATLS 2000'),
(14,'Engineering Leadership Gateway','COEN 2050'),
(15,'Complex Challenges in Leadership','COEN 3050'),
(16,'Computer Science:  The Canon','CSCI 4250'),
(17,'Computer Science:  The Canon','CSCI 5250'),
(18,'Sustainability and the Built Environment','CVEN 4700'),
(19,'Edges of Science','ECEN 3070'),
(20,'Intermediate Microeconomic Theory','ECON 3070'),
(21,'Intermediate Macroeconomic Theory','ECON 3080'),
(22,'Knowledge and Learning in Mathematics and Science','EDUC 4050'),
(23,'History of Jazz','EMUS 3642'),
(24,'History of Jazz','MUEL 3642'),
(25,'History of Jazz','MUSC 3642'),
(26,'Social Factors in Environmental Design','ENVD 2001'),
(27,'History & Theory of Environmental Design Small Scale: Buildings','ENVD 3114'),
(28,'History & Theory of Environmental Design Medium Scale: Precincts','ENVD 3134'),
(29,'Energy Policy and Society','ENVS 3621'),
(30,'Social Impact of Technology/Creative Technology','GEEN 1100'),
(31,'Social Impact of Technology/Creative Technology','CHEN 1000'),
(32,'Sustainability Ethics and Practice','GEEN 3300'),
(33,'World Regional Geography','GEOG 1982'),
(34,'Human Geographies','GEOG 1992'),
(35,'Natural Hazards','GEOG 3402'),
(36,'Environmental History of North America','HIST 4417'),
(37,'History of Mathematical Ideas','MATH 4820'),
(38,'Plagues, People, and Microorganisms','MCDB 1030'),
(39,'Evolution and Creationism','MCDB 3330'),
(40,'Construction of Knowledge in the Fields','NRLN 3500'),
(41,'Science and Society','PHIL 1400'),
(42,'Science and Public Policy','PHYS 3000'),
(43,'Global Issues in Leadership','PRLC 3810'),
(44,'The Environment and Public Policy','PSCI 3206'),
(45,'General Psychology','PSYC 1001'),
(46,'Environment and Society','SOCY 2077'),
(47,'Global Human Ecology','SOCY 4007'),
(48,'Inequality, Democracy, and the Environment','SOCYI 4027'),
(49,'Inequality, Democracy, and the Environment','ENVS 4027'),
(50,'Advanced Spanish Language Skills','SPAN 3000'),
(51,'Spanish Culture and Civilization','SPAN 3200'),
(52,'Special Topics: Introduction to Sustainability','SUST 2800');

