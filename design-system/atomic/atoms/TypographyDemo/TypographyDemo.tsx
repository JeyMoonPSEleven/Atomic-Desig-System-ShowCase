// src/design-system/atomic/atoms/TypographyDemo/TypographyDemo.tsx
import React, { useState } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { cn } from '../../../utils/cn';

export interface TypographyDemoProps {
    className?: string;
}

export const TypographyDemo = React.memo<TypographyDemoProps>(({
    className
}) => {
    const [copiedText, setCopiedText] = useState<string | null>(null);

    const copyToClipboard = async (text: string, name: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(name);
            setTimeout(() => setCopiedText(null), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const fontSizes = [
        { name: 'XS', value: 'var(--font-size-xs)', size: '12px', description: 'Texto extra pequeño' },
        { name: 'SM', value: 'var(--font-size-sm)', size: '14px', description: 'Texto pequeño' },
        { name: 'Base', value: 'var(--font-size-base)', size: '16px', description: 'Texto base' },
        { name: 'LG', value: 'var(--font-size-lg)', size: '18px', description: 'Texto grande' },
        { name: 'XL', value: 'var(--font-size-xl)', size: '20px', description: 'Texto extra grande' },
        { name: '2XL', value: 'var(--font-size-2xl)', size: '24px', description: 'Texto 2X grande' },
        { name: '3XL', value: 'var(--font-size-3xl)', size: '30px', description: 'Texto 3X grande' },
        { name: '4XL', value: 'var(--font-size-4xl)', size: '36px', description: 'Texto 4X grande' },
        { name: '5XL', value: 'var(--font-size-5xl)', size: '48px', description: 'Texto 5X grande' },
        { name: '6XL', value: 'var(--font-size-6xl)', size: '60px', description: 'Texto 6X grande' },
    ];

    const fontWeights = [
        { name: 'Thin', value: 'var(--font-weight-thin)', weight: '100', description: 'Peso muy ligero' },
        { name: 'Extra Light', value: 'var(--font-weight-extralight)', weight: '200', description: 'Peso extra ligero' },
        { name: 'Light', value: 'var(--font-weight-light)', weight: '300', description: 'Peso ligero' },
        { name: 'Normal', value: 'var(--font-weight-normal)', weight: '400', description: 'Peso normal' },
        { name: 'Medium', value: 'var(--font-weight-medium)', weight: '500', description: 'Peso medio' },
        { name: 'Semi Bold', value: 'var(--font-weight-semibold)', weight: '600', description: 'Peso semi negrita' },
        { name: 'Bold', value: 'var(--font-weight-bold)', weight: '700', description: 'Peso negrita' },
        { name: 'Extra Bold', value: 'var(--font-weight-extrabold)', weight: '800', description: 'Peso extra negrita' },
        { name: 'Black', value: 'var(--font-weight-black)', weight: '900', description: 'Peso negro' },
    ];

    const fontStyles = [
        { name: 'Normal', style: 'normal', description: 'Texto normal' },
        { name: 'Italic', style: 'italic', description: 'Texto en cursiva' },
        { name: 'Oblique', style: 'oblique', description: 'Texto oblicuo' },
    ];

    const textDecorations = [
        { name: 'None', decoration: 'none', description: 'Sin decoración' },
        { name: 'Underline', decoration: 'underline', description: 'Subrayado' },
        { name: 'Overline', decoration: 'overline', description: 'Línea superior' },
        { name: 'Line Through', decoration: 'line-through', description: 'Tachado' },
    ];

    const lineHeights = [
        { name: 'None', value: 'var(--line-height-none)', ratio: '1', description: 'Sin espacio entre líneas' },
        { name: 'Tight', value: 'var(--line-height-tight)', ratio: '1.25', description: 'Espaciado ajustado' },
        { name: 'Snug', value: 'var(--line-height-snug)', ratio: '1.375', description: 'Espaciado cómodo' },
        { name: 'Normal', value: 'var(--line-height-normal)', ratio: '1.5', description: 'Espaciado normal' },
        { name: 'Relaxed', value: 'var(--line-height-relaxed)', ratio: '1.625', description: 'Espaciado relajado' },
        { name: 'Loose', value: 'var(--line-height-loose)', ratio: '2', description: 'Espaciado amplio' },
    ];

    return (
        <div className={`${styles.typographyDemo} ${className || ''}`}>
            {/* Tamaños de Fuente */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Tamaños de Fuente</h3>
                <p className={styles.sectionDescription}>
                    Escala tipográfica que se adapta automáticamente al tamaño de pantalla.
                </p>
                <div className={styles.fontSizeGrid}>
                    {fontSizes.map((fontSize) => (
                        <div key={fontSize.name} className={styles.fontSizeItem}>
                            <div
                                className={styles.fontSizeExample}
                                style={{ fontSize: fontSize.value }}
                            >
                                The quick brown fox jumps over the lazy dog
                            </div>
                            <div className={styles.fontSizeInfo}>
                                <div className={styles.fontSizeHeader}>
                                    <Text variant="small" weight="bold" className={styles.fontSizeName}>
                                        {fontSize.name}
                                    </Text>
                                    <Button
                                        variant="secondary"
                                        size="small"
                                        onClick={() => copyToClipboard(fontSize.value, fontSize.name)}
                                        className={styles.copyButton}
                                    >
                                        {copiedText === fontSize.name ? (
                                            <>
                                                <Icon name="Check" size="small" />
                                                Copiado!
                                            </>
                                        ) : (
                                            <>
                                                <Icon name="Copy" size="small" />
                                                Copiar
                                            </>
                                        )}
                                    </Button>
                                </div>
                                <div className={styles.fontSizeValue}>{fontSize.value}</div>
                                <div className={styles.fontSizeSize}>{fontSize.size}</div>
                                <div className={styles.fontSizeDescription}>{fontSize.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pesos de Fuente */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Pesos de Fuente</h3>
                <p className={styles.sectionDescription}>
                    Diferentes pesos tipográficos para crear jerarquía visual.
                </p>
                <div className={styles.fontWeightGrid}>
                    {fontWeights.map((fontWeight) => (
                        <div key={fontWeight.name} className={styles.fontWeightItem}>
                            <div
                                className={styles.fontWeightExample}
                                style={{ fontWeight: fontWeight.value }}
                            >
                                {fontWeight.name}
                            </div>
                            <div className={styles.fontWeightInfo}>
                                <div className={styles.fontWeightHeader}>
                                    <Text variant="small" weight="bold" className={styles.fontWeightName}>
                                        {fontWeight.name}
                                    </Text>
                                    <Button
                                        variant="secondary"
                                        size="small"
                                        onClick={() => copyToClipboard(fontWeight.value, fontWeight.name)}
                                        className={styles.copyButton}
                                    >
                                        {copiedText === fontWeight.name ? (
                                            <>
                                                <Icon name="Check" size="small" />
                                                Copiado!
                                            </>
                                        ) : (
                                            <>
                                                <Icon name="Copy" size="small" />
                                                Copiar
                                            </>
                                        )}
                                    </Button>
                                </div>
                                <div className={styles.fontWeightValue}>{fontWeight.value}</div>
                                <div className={styles.fontWeightWeight}>{fontWeight.weight}</div>
                                <div className={styles.fontWeightDescription}>{fontWeight.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Estilos de Fuente */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Estilos de Fuente</h3>
                <p className={styles.sectionDescription}>
                    Diferentes estilos tipográficos para énfasis y variación.
                </p>
                <div className={styles.fontStyleGrid}>
                    {fontStyles.map((fontStyle) => (
                        <div key={fontStyle.name} className={styles.fontStyleItem}>
                            <div
                                className={styles.fontStyleExample}
                                style={{ fontStyle: fontStyle.style }}
                            >
                                {fontStyle.name}
                            </div>
                            <div className={styles.fontStyleInfo}>
                                <div className={styles.fontStyleHeader}>
                                    <Text variant="small" weight="bold" className={styles.fontStyleName}>
                                        {fontStyle.name}
                                    </Text>
                                    <Button
                                        variant="secondary"
                                        size="small"
                                        onClick={() => copyToClipboard(fontStyle.style, fontStyle.name)}
                                        className={styles.copyButton}
                                    >
                                        {copiedText === fontStyle.name ? (
                                            <>
                                                <Icon name="Check" size="small" />
                                                Copiado!
                                            </>
                                        ) : (
                                            <>
                                                <Icon name="Copy" size="small" />
                                                Copiar
                                            </>
                                        )}
                                    </Button>
                                </div>
                                <div className={styles.fontStyleValue}>{fontStyle.style}</div>
                                <div className={styles.fontStyleDescription}>{fontStyle.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decoraciones de Texto */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Decoraciones de Texto</h3>
                <p className={styles.sectionDescription}>
                    Diferentes decoraciones para destacar texto importante.
                </p>
                <div className={styles.textDecorationGrid}>
                    {textDecorations.map((decoration) => (
                        <div key={decoration.name} className={styles.textDecorationItem}>
                            <div
                                className={styles.textDecorationExample}
                                style={{ textDecoration: decoration.decoration }}
                            >
                                {decoration.name}
                            </div>
                            <div className={styles.textDecorationInfo}>
                                <div className={styles.textDecorationHeader}>
                                    <Text variant="small" weight="bold" className={styles.textDecorationName}>
                                        {decoration.name}
                                    </Text>
                                    <Button
                                        variant="secondary"
                                        size="small"
                                        onClick={() => copyToClipboard(decoration.decoration, decoration.name)}
                                        className={styles.copyButton}
                                    >
                                        {copiedText === decoration.name ? (
                                            <>
                                                <Icon name="Check" size="small" />
                                                Copiado!
                                            </>
                                        ) : (
                                            <>
                                                <Icon name="Copy" size="small" />
                                                Copiar
                                            </>
                                        )}
                                    </Button>
                                </div>
                                <div className={styles.textDecorationValue}>{decoration.decoration}</div>
                                <div className={styles.textDecorationDescription}>{decoration.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Alturas de Línea */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Alturas de Línea</h3>
                <p className={styles.sectionDescription}>
                    Control del espaciado entre líneas para mejorar la legibilidad.
                </p>
                <div className={styles.lineHeightGrid}>
                    {lineHeights.map((lineHeight) => (
                        <div key={lineHeight.name} className={styles.lineHeightItem}>
                            <div
                                className={styles.lineHeightExample}
                                style={{ lineHeight: lineHeight.value }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div className={styles.lineHeightInfo}>
                                <div className={styles.lineHeightHeader}>
                                    <Text variant="small" weight="bold" className={styles.lineHeightName}>
                                        {lineHeight.name}
                                    </Text>
                                    <Button
                                        variant="secondary"
                                        size="small"
                                        onClick={() => copyToClipboard(lineHeight.value, lineHeight.name)}
                                        className={styles.copyButton}
                                    >
                                        {copiedText === lineHeight.name ? (
                                            <>
                                                <Icon name="Check" size="small" />
                                                Copiado!
                                            </>
                                        ) : (
                                            <>
                                                <Icon name="Copy" size="small" />
                                                Copiar
                                            </>
                                        )}
                                    </Button>
                                </div>
                                <div className={styles.lineHeightValue}>{lineHeight.value}</div>
                                <div className={styles.lineHeightRatio}>{lineHeight.ratio}</div>
                                <div className={styles.lineHeightDescription}>{lineHeight.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ejemplo de Jerarquía */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Jerarquía Tipográfica</h3>
                <p className={styles.sectionDescription}>
                    Ejemplo de cómo usar la tipografía para crear jerarquía visual.
                </p>
                <div className={styles.hierarchyExample}>
                    <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-tight)' }}>
                        Título Principal
                    </h1>
                    <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'var(--font-weight-semibold)', lineHeight: 'var(--line-height-snug)' }}>
                        Título Secundario
                    </h2>
                    <h3 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-semibold)', lineHeight: 'var(--line-height-normal)' }}>
                        Título Terciario
                    </h3>
                    <p style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-normal)', lineHeight: 'var(--line-height-relaxed)' }}>
                        Este es un párrafo de ejemplo que muestra cómo se ve el texto normal con el espaciado relajado para una mejor legibilidad.
                        La tipografía es fundamental para crear una experiencia de usuario agradable y profesional.
                    </p>
                    <small style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-normal)', lineHeight: 'var(--line-height-normal)' }}>
                        Texto pequeño para notas y detalles adicionales que complementan la información principal.
                    </small>
                </div>
            </div>
        </div>
    );
});

TypographyDemo.displayName = 'TypographyDemo';