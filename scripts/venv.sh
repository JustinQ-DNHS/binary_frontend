#!/bin/bash

# Show the tools versions
python --version
bundle --version

# Create a virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    python -m venv venv
fi

# Activate the virtual environment
source venv/bin/activate

# Install the required Python packages
pip install -r requirements.txt
bundle install