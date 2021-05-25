#!/bin/sh

PLANTUML_JAR=./scripts/plantuml.jar

echo "Building the plantuml files"
find ./uml -name "*.uml" | xargs java -Djava.awt.headless=true -jar $PLANTUML_JAR -tpng -progress -output $PWD/static/img/uml/
echo
