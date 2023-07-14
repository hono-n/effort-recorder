FROM ruby:3.2.2

ENV APP_PATH /rails_app
ARG RUBYGEMS_VERSION=3.4.15

RUN mkdir $APP_PATH
WORKDIR $APP_PATH

COPY Gemfile $APP_PATH/Gemfile
COPY Gemfile.lock $APP_PATH/Gemfile.lock

RUN gem update --system ${RUBYGEMS_VERSION} && \
  bundle install

COPY . $APP_PATH

# コンテナー起動時に毎回実行されるスクリプトを追加
COPY entrypoint.sh /usr/bin/
# アクセス権を変更（chmod）して実行権限（x）を付与し、コマンドを実行
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

CMD ["rails", "server", "-b", "0.0.0.0"]