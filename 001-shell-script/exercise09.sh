#!/bin/bash

echo $1
if [ -z $1 ]
then
	echo "Please type a file or directory path as a parameter."
elif [ -d $1 ]
then
	ls -l
	echo "The $1 has `ls -p | grep -v / | wc -l` files"
else
	echo "The argument $1 isn't a directory"
fi