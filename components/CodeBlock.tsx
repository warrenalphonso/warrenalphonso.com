// From: https://mdxjs.com/guides/syntax-highlighting
import React from "react"
import Highlight, { Language, defaultProps } from "prism-react-renderer"
import duotoneLight from "prism-react-renderer/themes/duotoneLight"

type Props = {
  children: string
  className: Language
}

const CodeBlock = ({ children, className }: Props): JSX.Element => {
  const language = className.replace(/language-/, "") as Language
  return (
    <Highlight
      {...defaultProps}
      theme={duotoneLight}
      code={children}
      language={language}
    >
      {({ className, tokens, style, getLineProps, getTokenProps }) => (
        <pre
          className={`code-pre ${className}`}
          style={{ ...style, padding: "10px" }}
        >
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i, className: "code-line" })}
            >
              <span className="code-line-number">{i + 1}</span>
              <span className="code-line-content">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
