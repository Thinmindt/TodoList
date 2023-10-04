FROM python:3

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

ENV PYTHONUNBUFFERED 1

ENV NODE_VERSION=18.18.0
ENV NVM_DIR=/root/.nvm

# Configure apt and install packages
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
    #
    # Verify git, process tools, lsb-release (common in install instructions for CLIs) installed
    && apt-get -y install git iproute2 procps lsb-release \
    #
    # Install node
    && apt-get update \
    && apt-get -y install curl \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash \
    && . "${NVM_DIR}/nvm.sh" && nvm install ${NODE_VERSION} \ 
    && . "${NVM_DIR}/nvm.sh" && nvm use v${NODE_VERSION} \ 
    && . "${NVM_DIR}/nvm.sh" && nvm alias default v${NODE_VERSION} \
    #
    # Clean up
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Add npm to PATH
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=