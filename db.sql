drop table seller;
create table seller(uid INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT);

drop table menu;
create table menu(name text
        ,price INTEGER
        ,seller_id INTEGER Not Null
        ,hashText text
        ,FOREIGN KEY (seller_id) REFERENCES seller (uid) 
);

insert into seller(name) values("쌈마당 갈비집");
insert into seller(name) values("쌈마당 갈비집1");
insert into seller(name) values("쌈마당 갈비집2");
insert into seller(name) values("쌈마당 갈비집3");

insert into menu(name,price,seller_id) values("고기1",2,1);
insert into menu(name,price,seller_id) values("고기2",1,1);
insert into menu(name,price,seller_id) values("고기3",5,1);
insert into menu(name,price,seller_id) values("고기4",2,1);
insert into menu(name,price,seller_id) values("고기5",3,1);
insert into menu(name,price,seller_id) values("고기6",4,1);
insert into menu(name,price,seller_id) values("고기7",2,1);
insert into menu(name,price,seller_id) values("고기8",4,1);
insert into menu(name,price,seller_id) values("고기9",11,1);


