from setuptools import setup
import json

with open("README.md", "r") as fh:
    long_description = fh.read()

with open("package.json") as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")

setup(
    name=package_name,
    version=package["version"],
    author=package["author"],
    packages=[package_name],
    include_package_data=True,
    license=package["license"],
    long_description=long_description,
    long_description_content_type="text/markdown",
    repository=package["repository"]["url"],
    description=package.get("description", package_name),
    install_requires=[],
    classifiers=["Framework :: Dash",],
)
