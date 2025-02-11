# HASURA SEED SOURCE
# it is used in the
from?=${name}

# HASURA MIGRATION STEPS
# it is used in the hasura postgres migration scripts to control
# how many up/down migrations to apply
steps?=1

project?=default



#
# Project Management
#

start:
	@echo "Starting the project..."
	@docker-compose up -d hasura-cli adminer app-backoffice app-survey
	@docker-compose logs -f

start-be:
	@echo "Starting the project..."
	@docker-compose up -d hasura-cli adminer
	@docker-compose logs -f

start-backoffice:
	@echo "Starting App Backoffice..."
	@(cd app-backoffice && npm install && npm start)

start-survey:
	@echo "Starting App Survey..."
	@(cd app-survey && npm install && npm start)

stop:
	@echo "Stopping the project..."
	@docker-compose down

logs:
	@docker-compose logs -f

clear: stop
	@echo "Destroy local data..."
	@docker run --rm -v $(PWD):/data alpine:3.16 rm -rf ./data/.docker-data

restart: stop start
reset: stop clear start

install-cli:
	@curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash

test: test-hasura-actions test-hasura-events test-graphql-api

#
# Hasura State Management
#

init:
	@echo "Applying migrations to all databases..."
	@hasura migrate apply --project hasura-migrations --all-databases
	@echo "Applying Hasura metadata..."
	@hasura metadata apply --project hasura-migrations
	(make seed)

seed:
	@echo "Seeding the main database from: \"question_types.sql\"..."
	@hasura seed apply --project hasura-migrations --database-name $(project) --file question_types.sql
	@echo "Seeding the main database from: \"users.sql\"..."
	@hasura seed apply --project hasura-migrations --database-name $(project) --file users.sql
	@echo "Seeding the main database from: \"boards.sql\"..."
	@hasura seed apply --project hasura-migrations --database-name $(project) --file boards.sql
	@echo "Seeding the main database from: \"board_admins.sql\"..."
	@hasura seed apply --project hasura-migrations --database-name $(project) --file board_admins.sql
	@echo "Seeding the main database from: \"questions.sql\"..."
	@hasura seed apply --project hasura-migrations --database-name $(project) --file questions.sql
	@echo "Seeding the main database from: \"surveys_questions.sql\"..."
	@hasura seed apply --project hasura-migrations --database-name $(project) --file surveys_questions.sql
	@echo "Seeding the main database from: \"answers.sql\"..."
	@hasura seed apply --project hasura-migrations --database-name $(project) --file answers.sql
	


#
# PostgreSQL Migration Utilities
#

migrate:
	@hasura migrate apply --project hasura-migrations --database-name $(project)
	
migrate-status:
	@hasura migrate status --project hasura-migrations --database-name $(project)


migrate-up:
	@hasura migrate apply --project hasura-migrations --database-name $(project) --up $(steps)

migrate-down:
	@hasura migrate apply --project hasura-migrations --database-name $(project) --down $(steps)

migrate-redo:
	@hasura migrate apply --project hasura-migrations --database-name $(project) --down $(steps)
	@hasura migrate apply --project hasura-migrations --database-name $(project) --up $(steps)

migrate-create:
	@hasura migrate create \
		"$(name)" \
		--up-sql "SELECT NOW();" \
		--down-sql "SELECT NOW();" \
		--database-name default \
		--project hasura-migrations

#
# Metadata Utilities
#

metadata-export:
	@hasura metadata export --project hasura-migrations


#
# SQL Unit Test
#

test-sql-start:
	(cd hasura-migrations && make start)

test-sql-stop:
	(cd hasura-migrations && make stop)

test-sql-logs:
	(cd hasura-migrations && make logs)

test-sql-run:
	(cd hasura-migrations && make run project=$(project))

test-sql:
	(cd hasura-migrations && make test project=$(project))


#
# Testing Backend Services
#

test-hasura-actions:
	(cd hasura-actions && npm i && npm test)

test-hasura-events:
	(cd hasura-events && npm i && npm test)

test-graphql-api:
	(cd graphql-api && npm i && npm test)