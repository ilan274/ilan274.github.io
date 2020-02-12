#!/bin/bash

echo $1
# read -p "Type file or folder path: " arqdir

if [ -d $1 ]
then
	echo "$arqdir is a folder"
	find $1 -maxdepth 1 $basename
	echo "Those are all the files inside $1 folder"
elif [ -f $1 ]
then
	echo "$arqdir is a file"
fi
