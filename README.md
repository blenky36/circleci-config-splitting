
# CircleCI Config Splitting

Split your `.circleci/config.yml` into smaller files for easier maintainability.

Use the [circleci cli](https://circleci.com/docs/how-to-use-the-circleci-local-cli/#packing-a-config) to combine small configuration files into one larger `config.yml`

## Notes
- Files beginning with `@` will have only their contents added. This is useful for smaller chunks of the config where splitting into a file per item doesn't make sense, such as executors or parameters.
- All other files will have their content added as a key value pair, where the key is the file path, and value is the content of the file.
- Run `bun build:ci` to pack your config files together and validate the configuration is valid. 
- You never need to edit the `config.yml` directly. Always edit files within `.circleci/src` and then generate the config.