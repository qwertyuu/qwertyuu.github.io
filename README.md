# raphaelcote.com

Mon site web personnel - un portfolio

# pre setup homestead

install homestead (see Ver Dump)

run `ssh-keygen -t rsa -C "cotlarrc@msn.com"`

Go to Homestead.yaml

Find "C:/Users/.../.ssh" folder and link it at both place (authorize and keys)

folder map the repo

make sure to point to _site subfolder in site maps

# setup

install rvm (https://rvm.io/)

install ruby 2.6 (see Ver Dump)

run `bundle install`

# publish website

use `jgd -b master -r develop` to publish to github pages

# Ver Dump

- ruby 2.6.3p62 (2019-04-16 revision 67580) [x86_64-linux]
- jekyll 3.8.5
- homestead-10.0.2
