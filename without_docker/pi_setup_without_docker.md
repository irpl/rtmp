Edit /boot/firmware/config.txt, append the following config at the end of the file:

```sh
start_x=1
gpu_mem=128
```

Install rpi-update:

```sh
sudo curl -L --output /usr/bin/rpi-update https://raw.githubusercontent.com/Hexxeh/rpi-update/master/rpi-update && sudo chmod +x /usr/bin/rpi-update
```

Update firmware

```
sudo rpi-update
```

Install cmake and build-essential

```
sudo apt-get install cmake
sudo apt-get install build-essential
```

install ffmpeg:

[CompilationGuide/Ubuntu – FFmpeg](https://trac.ffmpeg.org/wiki/CompilationGuide/Ubuntu)

Life saver:

[using raspberry pi camera with ffmpeg (hardware accelerated) (github.com)](https://gist.github.com/moritzmhmk/48e5ed9c4baa5557422f16983900ca95)

do this on pi

[camera - How to use raspistill on Ubuntu - Raspberry Pi Stack Exchange](https://raspberrypi.stackexchange.com/questions/37359/how-to-use-raspistill-on-ubuntu)

[Install v4l-utils on Debian-based distros | by Pete Houston | Medium](https://medium.com/@petehouston/install-v4l-utils-on-debian-based-distros-d4f5c2fdcf61)

this happened to me

[compiling - Unable to compile FFmpeg on Ubuntu 20.04 - Ask Ubuntu](https://askubuntu.com/questions/1252997/unable-to-compile-ffmpeg-on-ubuntu-20-04)

add to rtmp repo

[NGINX systemd service file | NGINX](https://www.nginx.com/resources/wiki/start/topics/examples/systemd/)

[List of active RTMP connections? : nginx (reddit.com)](https://www.reddit.com/r/nginx/comments/evmd0d/list_of_active_rtmp_connections/)

[nginx-rtmp-module/stat.xsl at master · arut/nginx-rtmp-module (github.com)](https://github.com/arut/nginx-rtmp-module/blob/master/stat.xsl)
