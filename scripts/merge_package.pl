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

use feature qw/ postderef /;
use YAML::XS;
use Path::Tiny;
use JSON::PP qw//;
use JSON qw/ to_json /;

$YAML::XS::Boolean = 'JSON::PP';

my $yaml = deserialize_file 'package.yaml';
my $json = deserialize_file 'package.json';

my $mergers = delete $yaml->{_merge};

my $result = merge( { $json->%{@$mergers} }, $yaml );

my $encoder = JSON->new->pretty->canonical->space_before(0);

my $json = $encoder->encode($result);

$json =~ s/(^|\G)   /  /g;

if( grep { $_ eq '-n' } @ARGV ) {
    print $json;
} else {
    path('package.json')->spew($json);
    say "regenerated package.json"
}
