#!/usr/bin/env perl

=pod

I'm slightly fed up with `package.json`, because:

* the keys are ordering alphabetically, not logically.
* no comments.
* friggin' no trailing comma. And the quotes, my lord, the bloody
quotes...

Hence this script, which takes a `package.yaml`, and convert it
to `package.json`.
Sections, like `dependencies`, `devDependencies' and 'version' that we want to preserve can be given `_merge`. All data structures under the keys
given in `_merge` will have their `yaml` and `json` values merged,
with the `json` having priority.

By default `package.json` will be updated (like, that's the point isn't?).
For a dry run pass in a `-n` argument.

=cut

use 5.30.0;

use File::Serialize;
use Hash::Merge qw/ merge /;
use JSON qw/ to_json /;

use feature qw/ postderef /;

my $yaml = deserialize_file 'package.yaml';
my $json = deserialize_file 'package.json';

my $mergers = delete $yaml->{_merge};

my $result = merge( { $json->%{@$mergers} }, $yaml );

if( grep { $_ eq '-n' } @ARGV ) {
    print to_json $result, {
        pretty => 1,
        canonical => 1,
    }
}
else {
    serialize_file 'package.json' => $result;
    say "regenerated package.json"
}
