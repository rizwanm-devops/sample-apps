FROM python:alpine3.19

# Install necessary system dependencies for Python packages
RUN apk add --no-cache build-base libffi-dev gcc python3-dev musl-dev

WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Set the default command to run the application
CMD ["python", "/app/main.py"]