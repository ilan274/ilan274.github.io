#!/bin/bash

echo $@
# read -p "Type file or folder path: " arqdir
for i in $@
do
	if [ -d $i ]
	then
		echo "$arqdir is a folder"
		find $@ -maxdepth 1 $basename
		echo "Those are all the files inside $i folder"
	elif [ -f $i ]
	then
		echo "$arqdir is a file"
	fi
done