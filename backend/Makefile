include ./env/.env.test

CONTAINER_NAME="timong-db-test"
IS_DB_RUNNING=docker ps -a | grep $(CONTAINER_NAME) > /dev/null

SHELL="/bin/bash"

.PHONY	:	test
test	:
	@if ! $(call IS_DB_RUNNING); then \
		docker run -d --rm --name $(CONTAINER_NAME) \
		-e MONGO_INITDB_ROOT_USERNAME=$(DB_USER) \
		-e MONGO_INITDB_ROOT_PASSWORD=$(DB_PASSWORD) \
		-e MONGO_INITDB_DATABASE=calendar \
		-p $(DB_PORT):27017 mongo:5.0.6; \
	fi
	@npm run test

.PHONY	:	clean
clean	:
	@if $(call IS_DB_RUNNING); then \
		docker stop $(CONTAINER_NAME); \
	fi