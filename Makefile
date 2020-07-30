.PHONY: clean-dangling-images setup \
build pull build-push login run run-cold

-include .env

export VERSION = $(shell node -p "require('./package.json').version")
export REPOSITORY = $(shell node -p "require('./package.json').name")
export REGISTRY = desholmes


clean-dangling-images:
	@docker rmi -f $$(docker images -f 'dangling=true' -q)

setup:
	@cp .env-dist .env

clean:
	@docker rmi $(REGISTRY)/$(REPOSITORY):$(VERSION)

build:
	@docker build -t $(REGISTRY)/$(REPOSITORY):$(VERSION) .
	@make -s clean-dangling-images

push:
	@docker push $(REGISTRY)/$(REPOSITORY):$(VERSION)

login:
	@echo $(REGISTRY_PASSWORD) | docker login --username $(REGISTRY_USERNAME) --password-stdin

build-push:
	@make -s build
	@make -s login
	@make -s push

pull:
	@docker pull $(REGISTRY)/$(REPOSITORY):$(VERSION)

run:
	@docker run --rm -it \
		-p $(PORT):$(PORT) \
		-e PORT=$(PORT) \
		--name $(REPOSITORY) \
	$(REGISTRY)/$(REPOSITORY):$(VERSION)

run-cold:
	@make build
	@make run

run-clean:
	@make clean
	@make build
	@make run
