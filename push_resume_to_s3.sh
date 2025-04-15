#!/bin/zsh

# Check if the correct number of arguments is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <file-path-to-resume>"
    exit 1
fi

# Assign the file path argument to a variable
RESUME_FILE="$1"

# Check if the file exists
if [ ! -f "$RESUME_FILE" ]; then
    echo "Error: File '$RESUME_FILE' does not exist."
    exit 1
fi

S3_BUCKET="braydenchristensen-current-resume"

# Push the file to the S3 bucket
aws s3 cp "$RESUME_FILE" "s3://$S3_BUCKET/"

# Check if the upload was successful
if [ $? -eq 0 ]; then
    echo "Resume successfully uploaded to S3 bucket '$S3_BUCKET'."
else
    echo "Error: Failed to upload the resume to S3."
    exit 1
fi