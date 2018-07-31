###############################################
#
# Makefile
#
###############################################

clean:
	rm -f server.*

all: clean key csr cert

key:
	openssl genrsa -out server.key 2048

csr:
	openssl req -new -subj '/O=Apple Inc./C=US/ST=California/L=Cupertino/CN=www.apple.com' -key server.key -out server.csr

cert:
	openssl x509 -req -days 1826 -in server.csr -signkey server.key -out server.crt

check:
	openssl req -in server.csr -noout -text
	# openssl req -in server.csr -noout -verify -key server.key

dump:
	openssl x509 -in server.crt -text

test:
	openssl s_server -cert server.crt -www -accept 10443

pem:
	# not tested
	openssl pkcs12 -in server.pfx -out server.pem -nodes

pkcs12:
	# not tested
	openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.crt -out server.pem
	openssl pkcs12 -export -out server.pfx -in server.pem -name "Certificate"

dockerls:
	docker stats

dockerset:
	docker cp server.key $(CID):/opt/bitnami/apache/certs/new-server.key
	docker cp server.crt $(CID):/opt/bitnami/apache/certs/new-server.crt

dockerroot:
	docker exec -u root -t -i $(CID) /bin/bash

