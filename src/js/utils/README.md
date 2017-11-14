contains utils that can be imported by the components like so:

import formatDate from '../../../../utils/formatDate';
import getAtPath from '../../../../utils/getAtPath';
import toNumber from '../../../../utils/toNumber';
import toString from '../../../../utils/toString';

contains also a common.js with startup code (typekit, service-worker etc) that is always loaded
