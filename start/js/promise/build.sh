#!/usr/bin/env bash

if [ "$1" == "touch" ]; then
  # touch 1.txt 2.txt 3.txt
  echo '1st' > ./1.txt
  echo '2nd' > ./2.txt
  echo '3rd' > ./3.txt

elif [ "$1" == "rm" ]; then
  rm ./1.txt ./2.txt ./3.txt

fi
