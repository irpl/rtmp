Tested on Ubuntu 20.04 LTS on RPi 4 with an HQ Pi Camera Module

Enable pi cam by editting /boot/firmware/config.txt. Append these lines to the config.txt file:

```sh
sudo tee -a /boot/firmware/config.txt > /dev/null <<EOT
start_x=1
gpu_mem=128
EOT
```

Update because update:

```sh
sudo apt update
```

Get docker:

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo bash get-docker.sh
```

add your login user to the docker group with the following command:

```sh
sudo usermod -aG docker $(whoami)
```

For the changes to take effect, reboot your Raspberry Pi 4 with the following command:

```sh
sudo reboot
```

run the following command to verify whether docker is installed:

```sh
docker version
```

```
docker run --rm -it \
--device=/dev/video0:/dev/video0 \
linuxserver/ffmpeg \
-f video4linux2 \
-input_format h264 \
-video_size 1280x720 \
-framerate 30 \
-i /dev/video0 \
-vcodec copy \
-an \
-f flv rtmp://<rtmp_server>/<rtmp_application>/<stream_name>
```
