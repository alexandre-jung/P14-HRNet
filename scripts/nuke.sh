#!/usr/bin/env bash

(
  shopt -s globstar;
  rm -rf **/node_modules **/.turbo **/dist **/storybook-static;
)
