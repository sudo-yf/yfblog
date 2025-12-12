import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'
import type { Root } from 'mdast'

/**
 * Remark plugin to transform Obsidian-style image embeds (![[image.png]])
 * into standard Markdown image syntax (![](./assets/image.png))
 */
const remarkObsidianImages: Plugin<[], Root> = () => {
    return (tree) => {
        visit(tree, 'text', (node, index, parent) => {
            if (!parent || index === undefined) return

            const text = node.value
            // Match Obsidian image syntax: ![[image.png]]
            const obsidianImageRegex = /!\[\[([^\]]+\.(?:png|jpg|jpeg|gif|webp|svg))\]\]/gi

            if (obsidianImageRegex.test(text)) {
                const parts: any[] = []
                let lastIndex = 0

                // Reset regex
                obsidianImageRegex.lastIndex = 0
                let match

                while ((match = obsidianImageRegex.exec(text)) !== null) {
                    // Add text before the match
                    if (match.index > lastIndex) {
                        parts.push({
                            type: 'text',
                            value: text.slice(lastIndex, match.index),
                        })
                    }

                    // Add the image node
                    const imageName = match[1]
                    parts.push({
                        type: 'image',
                        url: `./assets/${imageName}`,
                        alt: imageName.replace(/\.[^.]+$/, ''), // Remove extension for alt text
                    })

                    lastIndex = match.index + match[0].length
                }

                // Add remaining text
                if (lastIndex < text.length) {
                    parts.push({
                        type: 'text',
                        value: text.slice(lastIndex),
                    })
                }

                // Replace the text node with the new nodes
                parent.children.splice(index, 1, ...parts)
            }
        })
    }
}

export default remarkObsidianImages
