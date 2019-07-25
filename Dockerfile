FROM gitpod/workspace-full

USER root
RUN curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
USER root