#!/aenv/bin/python3
import httpx, base64, json
import pprint

from io import BytesIO
from PIL import Image, ImageDraw, ImageFont

async def run(LLL):
    def watermark(img_obj, text1, text2, pos1, pos2):
        drawing = ImageDraw.Draw(img_obj)
        try:
            font = ImageFont.truetype("public2/css/font/Danj.ttf", 100)
        except IOError:
            font = ImageFont.load_default()

        drawing.text(pos1, text1, fill=(180, 0, 0), font=font)
        drawing.text(pos2, text2, fill=(204, 153, 0), font=font)

        buffer = BytesIO()
        img_obj.save(buffer, format='JPEG')
        return f'data:image/jpeg;base64,{base64.b64encode(buffer.getvalue()).decode()}'
    
#-----------------------------------------------------------------------

    marks = []

    async with httpx.AsyncClient(headers={"User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"}) as client:
        try:
            response = await client.get(LLL)
            data = response.json()
        except Exception as e:
            return json.dumps({"error": f"Connection failed: {e}"})
    
        for item in data[:2]: 
            try:
                photo_path = item.get('Photo')
                if not photo_path:
                    continue
                    
                photo_url = f'http://ci.encar.com/carpicture{photo_path}001.jpg?impolicy=heightRate'
                photo_url2 = f'http://ci.encar.com/carpicture{photo_path}007.jpg?impolicy=heightRate'
                
                img_res = await client.get(photo_url)
                img_res2 = await client.get(photo_url2)
                
                if img_res.status_code != 200:
                    continue

                img = Image.open(BytesIO(img_res.content)).convert("RGB")
                img2 = Image.open(BytesIO(img_res2.content)).convert("RGB")
                
                base64_img = watermark(
                    img, 
                    '& SK™Auto', 
                    '수출', 
                    pos1=(1580, 1140), 
                    pos2=(2040, 1140)
                )
                base64_img2 = watermark(
                    img2, 
                    '& SK™Auto', 
                    '수출', 
                    pos1=(1580, 1140), 
                    pos2=(2040, 1140)
                )
                
                # Add metadata along with the image
                marks.append({
                    "Id": item.get("Id"),
                    "Manufacturer": item.get("Manufacturer"),
                    "Model": item.get("Model"),
                    "Price": item.get("Price"),
                    "Mileage": item.get("Mileage"),
                    "image_data": base64_img,
                    "image_data2": base64_img2,
                    "Badge": item.get('Badge'),
                    "ModifiedDate": item.get('ModifiedDate')
                })
                
            except Exception as e:
                marks.append({"error": str(e), "path": photo_path})
                
    #pp = pprint.PrettyPrinter(indent=2, width=30, compact=True)
    ##return pp.pprint(marks)

    #return json.dumps(marks, indent=2)
    return marks
    

