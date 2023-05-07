const data =[
    {
       "id":"kaisarnoa",
       "name":"iphone 13",
       "company":"apple",
       "price":6000000,
       "colors":[
          "#ff0000",
          "#000000",
          "#CDD0D0"
       ],
       "image":"https://petapixel.com/assets/uploads/2021/10/iphone-13-pro-prores-review-1-800x534.jpg",
       "description":"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
       "category":"mobile",
       "featured":true
    },
    {
       "id":"kaisarnob",
       "name":"samsung s20",
       "company":"samsung",
       "price":5000000,
       "colors":[
          "#000",
          "#22D3EF"
       ],
       "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       "description":"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
       "category":"mobile",
       "shipping":true
    },
    {
       "id":"kaisarnoc",
       "name":"Dell Series",
       "company":"dell",
       "price":600000,
       "colors":[
          "#22D3EF",
          "#CDD0D0"
       ],
       "image":"https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       "description":"The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
       "category":"laptop"
    },
    {
       "id":"kaisarnod",
       "name":"iphone-13",
       "company":"iphone",
       "price":6756677,
       "colors":[
          "#000",
          "#000000",
          "#CDD0D0"
       ],
       "image":"https://petapixel.com/assets/uploads/2021/10/iphone-13-pro-prores-review-1-800x534.jpg",
       "description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi at dicta officia dolores harum asperiores repudiandae, accusantium quos doloremque velit ea nostrum, iusto, dolore iste? Nam aut necessitatibus consequuntur commodi.",
       "category":"mobile",
       "shipping":true
    },
    {
       "id":"kaisarnoe",
       "name":"Mac Pc",
       "company":"apple",
       "price":4000099,
       "colors":[
          "#000",
          "#CDD0D0"
       ],
       "image":"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       "description":"The Computer is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
       "category":"computer",
       "shipping":true
    },
    {
       "id":"kaisarnof",
       "name":"Macbook Pro",
       "company":"apple",
       "price":42999,
       "colors":[
          "#000000",
          "#CDD0D0"
       ],
       "image":"https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       "description":"The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
       "category":"laptop",
       "shipping":true
    },
    {
       "id":"kaisarnog",
       "name":"Asus gseries",
       "company":"asus",
       "price":23999,
       "colors":[
          "#CDD0D0",
          "#000"
       ],
       "image":"https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       "description":"The laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
       "category":"laptop",
       "shipping":true
    },
    {
       "id":"kaisarnoh",
       "name":"Accessories",
       "price":1099999,
       "company":"lenova",
       "colors":[
          "#000",
          "#CDD0D0"
       ],
       "image":"https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       "description":"The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
       "category":"accessories",
       "featured":true,
       "shipping":true
    },
    {
       "id":"kaisarnoi",
       "name":"Iwatch",
       "price":39999,
       "company":"apple",
       "colors":[
          "#000000"
       ],
       "image":"https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       "description":"This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
       "category":"watch",
       "shipping":true
    },
    {
       "id":"kaisarnoj",
       "name":"user need",
       "company":"apple",
       "price":300099,
       "colors":[
          "#ff0000",
          "#22D3EF",
          "#000000"
       ],
       "image":"https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       "description":"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
       "category":"accessories"
    },
    {
       "id":"kaisarnok",
       "name":"rolex premium",
       "company":"rolex",
       "price":999999,
       "colors":[
          "#000000",
          "#CDD0D0"
       ],
       "image":"https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       "description":"This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
       "category":"watch"
    },
    {
       "id":"kaisarnol",
       "name":"Fossil",
       "price":311999,
       "company":"samsung",
       "colors":[
          "#22D3EF",
          "#ff0000",
          "#000000"
       ],
       "image":"https://c0.wallpaperflare.com/preview/680/835/609/accessory-stylish-time-time-piece.jpg",
       "description":"This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
       "category":"watch",
       "featured":true
    },    
 ]



 export default data