import chalk from 'compiled/chalk';
import { BINARY } from './config';

const styled = {
  Usage: chalk.bold.underline('Usage'),
  Options: chalk.bold.underline('Options'),
  Examples: chalk.bold.underline('Examples'),
  sh: chalk.gray.dim('$'),
  bin: chalk.green(BINARY),
};

export const helpText = `
  ${styled.Usage}

    ${styled.sh} ${styled.bin} [...options] <template>

  ${styled.Options}

    <template>      The base template can optionally be provided as a
                    positional argument. If omitted, the template will be
                    prompted for interactively.

    --version, -v   Show which version of \`${BINARY}\` is
                    currently in use.

    --help, -h      Show help (you're lookin' at it).

  ${styled.Examples}

    ${styled.sh} npx ${styled.bin}
    ${styled.sh} npx ${styled.bin} --version
    ${styled.sh} npx ${styled.bin} hello-world
`;
