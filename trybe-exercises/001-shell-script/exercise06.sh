#!/bin/bash

read -p "Type file or folder path: " arqdir

if [ -d $arqdir ]
then
	echo "$arqdir is a folder"
	find $arqdir -maxdepth 1 $basename
	echo "Those are all the files inside $arqdir folder"
elif [ -f $arqdir ]
then
	echo "$arqdir is a file"
fi
