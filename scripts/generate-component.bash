#!/bin/bash

# bash script to generate a component. you are free to create components
# manually. the purpose of this script is to keep things consistent.

# and yeah, I know I could write it in JavaScript. but I just felt like writing
# in Bash.

# the first parameter passed to this script will be considered as the component
# name. please provide the name in snake-case. for example: root-layout

CSS_MODULE_NAME="$(echo $1 | sed -r 's/\ /-/g')".module.css
COMPONENT_DIR_NAME=$(echo $1 | sed -r 's/(^|-|_|\ )([a-z])/\U\2/g')

# gen_boilerplate_code() -> string
# generates boilerplate code for the component.
# @param {string} 1 - name of the component
# @param {string} 2 - path of the css module file

function gen_boilerplate_code() {
  CODE="import React from 'react';
import classes from '$2';

type PropType = {};

export function $1(props: PropType) {
  return <>$1 Works!!</>;
}"

  echo -e "$CODE"
}

################
##   START    ##
################
echo -e "
    +++++++++++++++++++++++++++++++
    ++                           ++
    ++    COMPONENT GENERATOR    ++
    ++    v0.1                   ++
    ++                           ++
    +++++++++++++++++++++++++++++++
"

# create components dir if it does not exists
if [ ! -d ./components ]; then
  mkdir -p ./components
fi

if [ -d ./components/$COMPONENT_DIR_NAME ]; then
  echo "==> Component '$COMPONENT_DIR_NAME' exists!"
  exit 1
else
  echo "==> Creating ./components/$COMPONENT_DIR_NAME ..."
  mkdir -p ./components/$COMPONENT_DIR_NAME/

  echo "==> Creating ./components/$COMPONENT_DIR_NAME/index.tsx ..."
  touch ./components/$COMPONENT_DIR_NAME/index.tsx

  echo "==> Creating ./components/$COMPONENT_DIR_NAME/$CSS_MODULE_NAME ..."
  touch ./components/$COMPONENT_DIR_NAME/$CSS_MODULE_NAME

  echo "==> Generating boilerplate code ..."
  gen_boilerplate_code $COMPONENT_DIR_NAME ./$CSS_MODULE_NAME \
  >./components/$COMPONENT_DIR_NAME/index.tsx

  echo "==> DONE!!"
fi
