/**
 * Copyright 2018 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

const uuid = require('uuid');

function main(args) {

  // Retreive DB credentials
  const dbURL = args['services.db.url'] || "https://my-nosql-db"
  const dbName = args['services.db.name'] || "cloud-functions-db"

  // Sanitize database object
  delete args['services.db.url']
  delete args['services.db.name']

  return new Promise((resolve, reject) => {
    exports.create(dbURL, dbName, args,
      (error, result) => {
        if (error) {
          console.log('[KO]', error);
          reject({ ok: false });
        } else {
          console.log('[OK]', result.id);
          resolve(result);
        }
      }
    );
  });
}

/// Creates a new database entry. It assigns a uuid to the object.
function create(dbURL, dbName, entry, callback /* err, entry */) {
  /// Instantiate database instance and insert an entry here
  callback(null, {ok: true, id: 1234})
}

exports.create = create;
exports.main = global.main = main;
