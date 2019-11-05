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

function main(args) {

  // Retreive DB credentials
  const dbURL = args['services.db.url'] || "https://my-nosql-db"
  const dbName = args['services.db.name'] || "cloud-functions-db"

  // Sanitize database object
  delete args['services.db.url']
  delete args['services.db.name']

  return new Promise((resolve, reject) => {
    exports.get(dbURL, dbName,
      (error, result) => {
        if (error) {
          console.log('[KO]', error);
          console.log("rejecting")
          reject({ ok: false });
        } else {
          console.log('[OK]', result);
          resolve(result);
        }
      }
    );
  });
}

/// Get all entries from given database
function get(dbURL, dbName, callback /* err, entries */) {

  /// Instantiate database Instance and retrieve entries here
  callback(null, {ok: true})
}

exports.get = get;
exports.main = global.main = main;
