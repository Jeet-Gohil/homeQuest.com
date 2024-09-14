import express from 'express';
import env from 'dotenv';
import pg from 'pg';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import multer from 'multer';

env.config();
const app = express();
const port = process.env.PORT;

const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(express.static('files'))
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));



const db = new pg.Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD
});

db.connect();

app.get("/api/a1/homeQuest", async (req, res)=> {
  try {
    const result = await db.query("select * from carouselbuyimages1 full join buypropertydata on carouselbuyimages1.name = property_name");
    const topBuyArea = await db.query("SELECT area_name, area_coordinates[0] AS longitude, area_coordinates[1] AS latitude FROM topareatobuy");
    const topArea = await db.query("select * from topareatobuy full join topareatable on topareatobuy.area_name = name");
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Image not found' });
    }
   const dataJSON = {
    propertyData : result.rows,
    topAreaToBuy: topBuyArea.rows,
    topArea: topArea.rows,
   
    
   };
   res.send(dataJSON);
    
  }
  catch(err) {
    console.log(err);
  }
});


app.post("/api/a1/homeQuest/", async (req, res)=> {
  
   try{   
    const property_detail = await db.query("INSERT INTO buypropertydata (group_name, property_name, address, config, price) VALUES ($1, $2, $3, $4, $5) RETURNING*",
      [req.body.group_name, req.body.property_name, req.body.address, req.body.config, req.body.price]
    );
    
    
    res.status(200).json({
      status: "data successfully uploaded",
      property_data : {
        data: property_detail.rows,
        
      }
    });
    
   }
   catch(err) {
    console.log(err);
   }
});

app.post('/api/a1/homeQuest/upload', upload.single('image'), async (req, res) => {
  const {mimetype}= req.file;
  const  name = req.body.data;
 
  
  try {  
    // console.log([buffer, mimetype]);
    console.log(req.body);
    const base64Image = req.file.buffer.toString('base64');
    const imageURL = `data:${mimetype};base64,${base64Image}`;
    
    const result = await db.query("INSERT INTO carouselbuyimages1 (image_data, name, mime_type) VALUES ($1, $2, $3) RETURNING *",
      [imageURL, name, mimetype]
    );
    res.status(200).json(
      {         
        status: "succesfully uploaded",
        data: {
          data: result.rows[0],
          
        }
      }
    );
  } 
  catch(err) {}
});

app.put("/api/a1/homeQuest/:id", async (req, res)=> {
    try{
        const result = await db.query("UPDATE houses SET type = $1, address = $2, house_rent = $3, society_maintenance = $4 WHERE id = $5 returning*",
            [req.body.type, req.body.address, req.body.house_rent, req.body.society_maintenance, req.params.id]
        );
        res.status(201);
        console.log("this a put request");
    }
    catch(err) {
        console.log(err);
    }
});

app.delete("/api/a1/homeQuest/:id", async (req, res)=> {
   try {
    const result = await db.query("DELETE FROM houses WHERE id = $1", [req.params.id])

    res.status(201);
    console.log("this is a delete request");
   }
   catch(err) {
    console.log(err);
   }
});

app.listen(port, ()=> {
    console.log(`server is listening on port ${port}`);
});