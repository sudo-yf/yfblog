import Giscus from '@giscus/react'

interface CommentsProps {
    repo: string
    repoId: string
    category: string
    categoryId: string
    mapping?: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number'
    reactionsEnabled?: boolean
    lang?: string
}

/**
 * Giscus-based comment system component
 * Styled to match the blog's dark theme with oklch color scheme
 */
export default function Comments({
    repo,
    repoId,
    category,
    categoryId,
    mapping = 'pathname',
    reactionsEnabled = true,
    lang = 'zh-CN',
}: CommentsProps) {
    // Custom minimal theme encoded as Data URI to work locally without deployment
    // Removes borders, backgrounds, and shadows
    const customTheme = `data:text/css;base64,bWFpbiB7CiAgLS1jb2xvci1jYW52YXMtZGVmYXVsdDogdHJhbnNwYXJlbnQ7CiAgLS1jb2xvci1jYW52YXMtb3ZlcmxheTogdHJhbnNwYXJlbnQ7CiAgLS1jb2xvci1jYW52YXMtaW5zZXQ6IHRyYW5zcGFyZW50OwogIC0tY29sb3ItYm9yZGVyLWRlZmF1bHQ6IHRyYW5zcGFyZW50OwogIC0tY29sb3ItYm9yZGVyLW11dGVkOiB0cmFuc3BhcmVudDsKICAtLWNvbG9yLWJvcmRlci1wcmltYXJ5OiB0cmFuc3BhcmVudDsKICAtLWNvbG9yLWJvcmRlci1zZWNvbmRhcnk6IHRyYW5zcGFyZW50OwogIC0tY29sb3ItYm9yZGVyLXRlcnRpYXJ5OiB0cmFuc3BhcmVudDsKICAtLWNvbG9yLWJ0bi10ZXh0OiAjYzlkMWQ5OwogIC0tY29sb3ItYnRuLWItaG92ZXItYmc6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7CiAgLS1jb2xvci1idG4tcHJpbWFyeS1iZzogI2U5ZDNiNjsKICAtLWNvbG9yLWJ0bi1wcmltYXJ5LXRleHQ6ICMxYTFhMWE7CiAgLS1jb2xvci1mZy1kZWZhdWx0OiAjZTlkM2I2OwogIC0tY29sb3ItZmctbXV0ZWQ6ICM4Yjk0OWU7Cn0KLmdzYy1jb21tZW50LWJveCwKLmdzYy1yZXBseS1ib3gsCi5nc2MtaW5wdXQsCi5nc2MtY29udHJvbCwKLmdzYy10aW1lbGluZSB7CiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7CiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9XcnRhbnQ7CiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50Owp9`

    return (
        <div className="giscus-wrapper w-full">
            <Giscus
                id="comments"
                repo={repo as `${string}/${string}`}
                repoId={repoId}
                category={category}
                categoryId={categoryId}
                mapping={mapping}
                reactionsEnabled={reactionsEnabled ? '1' : '0'}
                emitMetadata="0"
                inputPosition="top"
                theme={customTheme}
                lang={lang}
                loading="lazy"
            />
        </div>
    )
}
