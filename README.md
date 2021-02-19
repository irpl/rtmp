1. Install prerequisites
   ```sh
   sudo apt-get install build-essential libpcre3-dev libssl-dev zlib1g-dev
   ```
2. create a folder in the home dir and cd into it
   ```
   mkdir -p nginx && cd nginx
   ```
3. Clone the nginx repo and the ngnx-rtmp-module repo  
   nginx:

   ```
   git clone https://github.com/nginx/nginx.git

   ```

   nginx-rtmp-module:

   ```
   git clone https://github.com/arut/nginx-rtmp-module.git

   ```

4. Congigure nginx with the rtmp module
   ```
   ./auto/configure --add-module=../ngninx-rtmp-module
   ```
5. then a compile

   ```
   make
   sudo make install
   ```

6. Backup the existing `nginx.conf`

   ```
   sudo cp /usr/local/nginx/conf/nginx.conf /usr/local/nginx/conf/nginx.conf.bak
   ```

   ```
   sudo nano /usr/local/nginx/conf/nginx.conf
   ```

7. replace it with the following:

   ```
   user www-data;
   worker_processes auto;
   pid /run/nginx.pid;

   events {
     worker_connections 1024;
   }

   rtmp {
     server {
       listen 1935;
       application live {
         live on;
         interleave on;
         hls on;
         hls_path /tmp/hls;
         hls_fragment 15s;
         dash on;
         dash_path /tmp/dash;
         dash_fragment 15s;
       }
     }
   }

   http {
     default_type application/octet-stream;
     server {
     listen 80;
     location / {
       root /tmp;
     }
       types {
         application/vnd.apple.mpegurl m3u8;
         video/mp2t ts;
         text/html html;
         application/dash+html mpd;
       }
     }
   }
   ```

ffmpeg -f dshow -i video="Integrated Webcam" -profile:v high -pix_fmt yuvj420p -level:v 4.1 -preset ultrafast -tune zerolatency -vcodec libx264 -r 10 -b:v 512k -s 640x360 -acodec aac -ac 2 -ab 32k -ar 44100 -f flv rtmp://167.71.240.119/live/live

ffmpeg -f dshow -i video="Integrated Webcam" -framerate 1 -video_size 720x404 -vcodec libx264 -maxrate 768k -bufsize 8080k -vf "format=yuv420p" -g 60 -f flv rtmp://167.71.240.119/live/live