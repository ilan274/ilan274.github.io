#!/bin/bash

fbname=$($basename "$fullfile" | cut -d. -f1)

for i in .; do
	echo $fbname
done