FROM python:3.13-slim

# Install necessary dependencies for Python packages
RUN apt-get update && apt-get install -y \
    build-essential \
    libffi-dev \
    gcc \
    python3-dev

WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Check Python version
RUN python -V

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Set the default command to run the application
CMD ["python", "/app/main.py"]
