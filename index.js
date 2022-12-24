module.exports = {
  process(sourceText, _sourcePath, options) {
    const extensions = options.transformerConfig ? options.transformerConfig : []

    if (extensions.length === 0) {
      throw new Error('Specify extensions to remove')
    }

    const regExp = new RegExp(
      `(\\b(from\\s+?|require\\()["'].+?\\/[^.]*?)(${extensions.join('|').replace(/\./g, '\\.')})(["'])`,
      'gi',
    )

    return {
      code: sourceText.replace(regExp, '$1$4'),
    }
  },
}
