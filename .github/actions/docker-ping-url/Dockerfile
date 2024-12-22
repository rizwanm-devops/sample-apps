FROM python:alpine3.19

# Install Alpine dependencies
RUN apk add --no-cache build-base libffi-dev gcc musl-dev python3-dev

WORKDIR /app

# Copy requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the app code
COPY . .

# Start the app
CMD ["python", "/app/main.py"]
