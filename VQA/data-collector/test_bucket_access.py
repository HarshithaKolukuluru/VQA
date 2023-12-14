import os
from google.cloud import storage


gcp_project = os.environ["GCP_PROJECT"]
bucket_name = "vqa-dataset-bucket"
persistent_folder = "/persistent"


def download_blob(bucket_name, source_blob_name, destination_file_name):
    """Downloads a blob from the bucket."""

    storage_client = storage.Client(project=gcp_project)

    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(source_blob_name)
    blob.download_to_filename(destination_file_name)


print(gcp_project)

# Test access
relative_download_path = "model"
download_file = "cnn_lstm2.json"
download_blob(bucket_name, os.path.join(relative_download_path, download_file),
              os.path.join(persistent_folder, download_file))
