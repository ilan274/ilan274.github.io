#!/bin/bash

read -p "Write a path to a file to verify if it exists: " file


if [ -e $file ]
then
	echo "Path is enabled."
	if [ -w $file ]
	then
		echo "You have writing permission to `basename $file`"
	else
		echo "You don't have writing permission to `basename $file`"
	fi
else
	echo "`basename $file` doesen't exist in $file"
fi
