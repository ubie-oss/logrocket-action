# logrocket-action

This action provides LogRocket CLI wrapper.

## Usage

```yml
steps:
  - uses: ubie-oss/logrocket-action@main
    with:
      release: v1.0.0 # Release identifier
      api-key: your-api-key # LogRocket API Key
      source-map-dir: path/to/sourcemap # Path of directory that contains source maps (Optional)
      url-prefix: ~/url/prefix # See LogRocket's doc (Optional)
```

See [LogRocket's doc](https://docs.logrocket.com/docs/stacktraces#section-uploading-source-maps-to-logrocket) for more detail about options.

If `source-map-dir` is undefined, this action just creates a release without source maps.
