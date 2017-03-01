
HOST: http://locahhost:8080/


//const url = http://locahhost/cms/GetTitle/IRT

#Get Title For Instructor Resource [/cms/GetTitle/IRT]
### [POST : {
        {
	        "target" : "Title"
        }
}]


+ Response 200 (application/json)
        [
            {
                "_id": "58abb24fefd4a62886013c0a",
                "target": "Title",
                "Title": "Hello"
            }
        ]




#Save Title For Instructor Resource [/cms/SaveInstructorTitle/]
### [POST] : {
	            "Title" : "Hello World"
            }


+ Response 201 (Created)







#Get Title For Instructor Resource Copy [/cms/GetTitle/IRTC]
### [POST : {
        {
	        "target" : "Title"
        }
}]


+ Response 200 (application/json)
        [
            {
                "_id": "58aa5e29efd4a62886006c32",
                "target": "Title",
                "Title": "Hey There"
            }
        ]


#Save Title For Instructor Resource Copy [/cms/SaveInstructorTitleCopy]
### [POST] : {
	            "Title" : "Hello World"
            }


+ Response 201 (Created)


#Get Data For Site Settings [/cms/getData]
### [POST : {
                {
                    "collection" : "MaxCards",
                    "field" : "max_cards"
                }
}]

    + Collection Options
        "collection" : "MaxCards",
        "collection" : "TagLabel",
        "collection" : "FilterLabel"
        
    

    + field Options
        "field" : "tag_label",
        "field" : "max_cards"
        "field" : "filter_label"


+ Response 200 (application/json)
    [
        {
            "_id": "58ad104defd4a6288601ea9f",
            "target": "max_cards",
            "value": "8777"
        }
    ]


#Save Title For Site Settings [/cms/setData]
### [POST] : {
                "collection" : <collection>,
                "target" : <target>,
                "value" : <value>
            }


        + Collection Options
            "collection" : "MaxCards",
            "collection" : "TagLabel",
            "collection" : "FilterLabel"


        +target options 
            "target" : "max_cards",
            "target" : "filter_label",
            "target" : "tag_label"
            

+ Response 201 (Created)


