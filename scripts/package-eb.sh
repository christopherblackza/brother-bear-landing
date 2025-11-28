#!/bin/bash

# Name of the output zip file
OUTPUT_FILE="brother-bear-landing-eb.zip"

# Remove existing zip if it exists
rm -f $OUTPUT_FILE

# Create the zip file
# -r: recursive
# -q: quiet
zip -r -q $OUTPUT_FILE dist/brother-bear-landing Procfile package.json .ebextensions .platform

echo "Created deployment package: $OUTPUT_FILE"
echo "You can now upload this file to AWS Elastic Beanstalk."
