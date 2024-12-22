# Start with the python:alpine3.19 image
FROM python:alpine3.19

# Install git (needed for pip to clone the cloud-init repository from GitHub)
RUN apk add --no-cache git

# Set the working directory
WORKDIR /app

# Copy the requirements.txt file into the container
COPY requirements.txt .

# Verify python version (optional)
RUN python -V

# Install the dependencies listed in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Command to run your application (if any)
CMD ["python", "your_script.py"]
