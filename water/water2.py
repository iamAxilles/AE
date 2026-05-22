#!/aenv/bin/python3
import httpx
import requests
import base64
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont

async def run2():
    def watermark(img_obj, text1, text2, pos1, pos2):
        # Create drawing context
        drawing = ImageDraw.Draw(img_obj)
        
        try:
            font = ImageFont.truetype("public2/css/font/Danj.ttf", 90)
        except IOError:
            font = ImageFont.load_default()

        # Apply text
        drawing.text(pos1, text1, fill=(180, 0, 0), font=font)
        drawing.text(pos2, text2, fill=(204, 153, 0), font=font)

        # Convert to Base64
        buffer = BytesIO()
        img_obj.save(buffer, format='JPEG')
        byte_data = buffer.getvalue()
        base64_encoded = base64.b64encode(byte_data).decode('utf-8')
        return f'data:image/jpeg;base64,{base64_encoded}'
    
#-----------------------------------------------------------------------

    # 1. Fetch the full list of data
    async with httpx.AsyncClient(headers={"User-Agent": "Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)"}) as client:
        try:
            response = await client.get('http://localhost:8000/encar/bmw3')
            response.raise_for_status() # Check for HTTP errors
            data = response.json()
        except Exception as e:
            return f"<h1>Error fetching data: {e}</h1>"
    
        watermarked_html_tags = []

        # 2. Iterate (Using the same client for images is much faster)
        for item in data[:1]: 
            try:
                photo_path = item.get('Photo')
                if not photo_path:
                    continue
                    
                photo_url = f'http://ci.encar.com/carpicture{photo_path}001.jpg?impolicy=heightRate'
                
                # Fetch image asynchronously
                img_res = await client.get(photo_url)
                if img_res.status_code != 200:
                    continue

                # Open and process
                img = Image.open(BytesIO(img_res.content)).convert("RGB")
                
                base64_img = watermark(
                    img, 
                    '& SK™Auto', 
                    '수출', 
                    pos1=(1580, 1140), 
                    pos2=(2040, 1140)
                )
                
                watermarked_html_tags.append(f'<img src="{base64_img}" style="margin:10px; width:400px;"/>')
                
            except Exception as e:
                print(f"Skipping image: {e}")
                continue

    return "".join(watermarked_html_tags)
# <img 4 картинки