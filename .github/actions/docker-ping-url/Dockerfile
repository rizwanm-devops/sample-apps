# Start with the python:alpine3.19 image
FROM python:alpine3.19

# Install git and other necessary packages (including command-not-found if needed)
RUN apk add --no-cache git command-not-found

# Set the working directory
WORKDIR /app

# Copy the requirements.txt file into the container
COPY requirements.txt .

# Verify python version (optional)
RUN python -V

# Install the dependencies listed in requirements.txt (excluding command-not-found)
RUN pip install --no-cache-dir -r requirements.txt

# Command to run your application (if any)
CMD ["python", "main.py"]
